from django.shortcuts import render
from django.http.response import JsonResponse
from api import models

# Create your views here.

def product_list(request):
    products = models.Product.objects.all()
    products_json = [product.to_json() for product in products]
    return JsonResponse(products_json, safe=False)

def product_by_id(request, product_id):
    product = models.Product.objects.get(id = product_id)
    return JsonResponse(product.to_json(), safe=False)

def categories(request):
    c = models.Category.objects.all()
    c_json = [cat.to_json() for cat in c]
    return JsonResponse(c_json, safe=False)

def category_by_id(request, category_id):
    category = models.Category.objects.get(id = category_id)

    return JsonResponse(category.to_json(), safe=False)

def products_by_category(request, category_id):
    c = models.Category.objects.get(pk=category_id)
    products_json = [p.to_json() for p in c.product_set.all()]
    return JsonResponse(products_json, safe=False)