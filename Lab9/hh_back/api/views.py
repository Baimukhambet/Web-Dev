from django.shortcuts import render
from api.models import Company, Vacancy
from django.http import JsonResponse
import json
from django.views.decorators.csrf import csrf_exempt

# Create your views here.


@csrf_exempt
def list_companies(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        companies_json = [c.to_json() for c in companies]
        return JsonResponse(companies_json, safe=False)
    if request.method == 'POST':
        data = json.loads(request.body)
        c = Company.objects.create(name=data.get('name', ''), description=data.get('description', ''), city=data.get('city', ''), address=data.get('address', ''))
        return JsonResponse(c.to_json())

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
        return JsonResponse({'error':str(e)}, status = 400)
    json = [v.to_json() for v in company.vacancy_set.all()]

    return JsonResponse(json, safe=False)

def list_vacancies(request):
    vacancies = Vacancy.objects.all()
    json = [v.to_json() for v in vacancies]
    return JsonResponse(json, safe=False)

@csrf_exempt
def vacancy_by_id(request, vacancy_id):
    try:
        v = Vacancy.objects.get(id=vacancy_id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error':str(e)}, status = 400)
    if request.method == 'GET':
        return JsonResponse(v.to_json(), safe=False)
    if request.method == 'DELETE':
        v.delete()
        return JsonResponse({'deleted': True})

def top_vacancies(request):
    vacancies = Vacancy.objects.all()
    top = vacancies.order_by('-salary')[:10]
    json = [v.to_json() for v in top]

    return JsonResponse(json, safe=False)