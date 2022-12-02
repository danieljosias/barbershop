from django.urls import path
from clients.views import ClientView, ClientDetailView

urlpatterns = [
    path('clients/', ClientView.as_view()),
    path('clients/<client_id>/', ClientDetailView.as_view()),
]