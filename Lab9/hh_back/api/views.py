from django.shortcuts import render
from api.models import Company, Vacancy
from django.http import JsonResponse

# Create your views here.

def list_companies(request):
    companies = Company.objects.all()
    json = [c.to_json() for c in companies]
    return JsonResponse(json, safe=False)

def company_by_id(request, company_id):
    try:
        c = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error':f'{e}'}, status = 400)
    return JsonResponse(c.to_json(), safe=False)

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

def vacancy_by_id(request, vacancy_id):
    try:
        v = Vacancy.objects.get(id=vacancy_id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error':str(e)}, status = 400)
    return JsonResponse(v.to_json(), safe=False)

def top_vacancies(request):
    vacancies = Vacancy.objects.all()
    top = vacancies.order_by('-salary')[:10]
    json = [v.to_json() for v in top]

    return JsonResponse(json, safe=False)