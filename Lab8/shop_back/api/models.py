from django.db import models


# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name
        }


class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField()
    description = models.TextField(default='def')
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    count = models.IntegerField()
    is_active = models.BooleanField()

    def __str__(self):
        return f'id:{self.id} {self.name}'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'category': self.category.__str__(),
            'price': self.price,
            'description': self.description,
            'count': self.count,
            'is_active': self.is_active
        }

