from django.urls import path
from schedules.views import ScheduleView, ScheduleDetailView

urlpatterns = [
    path("schedules/", ScheduleView.as_view()),
    path("schedules/<schedule_id>/", ScheduleDetailView.as_view()),
]
