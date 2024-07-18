from django.urls import path
from .views import RecipeView
from . import views

#routes for get all recipes and target recipe by id for get one or delete
urlpatterns = [
    path('', views.index, name='index'),
    path('recipes/', RecipeView.as_view()),
    path('recipes/<int:pk>/', RecipeView.as_view())
]