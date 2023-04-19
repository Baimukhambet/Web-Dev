from django.shortcuts import render
from api.models import Company, Vacancy
from django.http import JsonResponse, HttpResponse
import json
from api import serializers
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# Create your views here.


@csrf_exempt
def list_companies(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        ser = serializers.CompanySerializer(companies, many=True)
        ser2 = serializers.CompanyModelSerializer(companies, many = True)
        #companies_to_json = [c.to_json() for c in companies]
        return JsonResponse(ser2.data, safe=False)
    if request.method == 'POST':
        data = json.loads(request.body)
        c = Company.objects.create(name=data.get('name', ''), description=data.get('description', ''), city=data.get('city', ''), address=data.get('address', ''))
        return JsonResponse(c.to_json())

class CompanyList(APIView):
    def get(self, request, format=None):
        companies = Company.objects.all()
        ser = serializers.CompanySerializer(companies, many=True)
        return Response(ser.data)
    def post(self, request, format=None):
        ser = serializers.CompanyModelSerializer(data=request.data)
        if ser.is_valid():
            ser.save()
            return Response(ser.data, status=status.HTTP_201_CREATED)
        return Response(ser.errors, status=status.HTTP_400_BAD_REQUEST)

@csrf_exempt
def company_by_id(request, company_id):
    try:
        c = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error':f'{e}'}, status = 400)
    if request.method == 'GET':
        return JsonResponse(c.to_json(), safe=False)
    if request.method == 'PUT':
        data = json.loads(request.body)
        name = data.get('name', c.name)
        desc = data.get('description', c.description)
        city = data.get('city', c.city)
        adr = data.get('address', c.address)
        c.name = name
        c.description = desc
        c.city = city
        c.address = adr
        c.save()
        return JsonResponse({'changed':True}, safe=False)
    if request.method == 'DELETE':
        c.delete()
        return JsonResponse({'deleted':True})

def company_vacancies(request, company_id):
    try:
        company = Company.objects.get(pk = company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error':str(e)}, safe=False)
    json = [v.to_json() for v in company.vacancy_set.all()]

    return JsonResponse(json, safe=False)

class VacancyList(APIView):
    def get(self, request, format=None):
        vacancies = Vacancy.objects.all()
        ser = serializers.VacancySerializer(vacancies, many = True)
        return Response(ser.data)

def list_vacancies(request):
    vacancies = Vacancy.objects.all()
    json = [v.to_json() for v in vacancies]
    return JsonResponse(json, safe=False)

@csrf_exempt
def vacancy_by_id(request, vacancy_id):
    try:
        v = Vacancy.objects.get(id=vacancy_id)
        ser = serializers.VacancyModelSerializer(v)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error':str(e)}, status = 400)
    if request.method == 'GET':
        return JsonResponse(ser.data, safe=False)
    if request.method == 'DELETE':
        v.delete()
        return JsonResponse({'deleted': True})

def top_vacancies(request):
    vacancies = Vacancy.objects.all()
    top = vacancies.order_by('-salary')[:10]
    ser = serializers.VacancyModelSerializer(top, many=True)

    return JsonResponse(ser.data, safe=False)

class TopTen(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all()
        top = vacancies.order_by('-salary')[:10]
        ser = serializers.VacancySerializer(top, many=True)
        return Response(ser.data)