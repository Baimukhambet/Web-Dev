from django.shortcuts import render
from django.http.response import JsonResponse
from api import models

# Create your views here.

def product_list(request):
    products = models.Product.objects.all()
    products_json = [product.to_json() for product in products]
    return JsonResponse(products_json, safe=False)

def product_by_id(request, id):
    products = models.Product.objects.all()
    products_json = [product.to_json() for product in products if product.id == id]

    products_by_id = [product for product in products_json if product['id'] == id]

    return JsonResponse(products_by_id, safe=False)

def categories(request):
    c = models.Category.objects.all()
    c_json = [cat.to_json() for cat in c]
    return JsonResponse(c_json, safe=False)

def category_by_id(request, id):
    categories = models.Category.objects.all()
    categories_json = [c.to_json() for c in categories]
    categories_by_id = [c for c in categories_json if c['id'] == id]

    return JsonResponse(categories_by_id, safe=False)

def products_by_category(request, id):
    products = models.Product.objects.all()
    products_json = [p.to_json() for p in products]

    category = models.Category.objects.all()
    c = str()
    category_json = [c.to_json() for c in category]
    for cat in category_json:
        if id == cat['id']:
            c = cat['name']
            break
    p_by_c = [p for p in products_json if p['category'] == c]

    return JsonResponse(p_by_c, safe=False)