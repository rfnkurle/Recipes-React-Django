from django.shortcuts import render
from django.shortcuts import render
from django.http.response import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http.response import JsonResponse
from .models import Recipe
from .serializers import RecipeSerializer


class RecipeView(APIView):
   
    def post(self, request):
        data = request.data
        serializer = RecipeSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Recipe Added Successfully", safe=False)
        return JsonResponse("Failed to Add Recipe", safe=False)
    
  
