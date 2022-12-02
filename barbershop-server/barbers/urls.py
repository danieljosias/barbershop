from django.urls import path
from barbers.views import BarberView, BarberDetailView

urlpatterns = [
    path("barbers/", BarberView.as_view()),
    path("barbers/<barber_id>/", BarberDetailView.as_view()),
]
