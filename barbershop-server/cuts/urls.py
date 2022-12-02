from django.urls import path
from cuts.views import CutView, CutDetailView

urlpatterns = [
    path("cuts/", CutView.as_view()),
    path("cuts/<cut_id>/", CutDetailView.as_view()),
]
