from schedules.models import Schedule
from schedules.serializers import ScheduleSerializer
from rest_framework import generics
from rest_framework.authentication import TokenAuthentication
from schedules.permissions import IsAuthenticatedAndBarber

class ScheduleView(generics.ListCreateAPIView):
    authentication_classes = [TokenAuthentication]
    permissions_classes = [IsAuthenticatedAndBarber]

    queryset = Schedule.objects.all()
    serializer_class = ScheduleSerializer

class ScheduleDetailView(generics.RetrieveUpdateDestroyAPIView):
    authentication_classes = [TokenAuthentication]
    permissions_classes = [IsAuthenticatedAndBarber]

    lookup_url_kwarg = "schedule_id"

    queryset = Schedule.objects.all()
    serializer_class = ScheduleSerializer