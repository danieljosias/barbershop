from barbers.models import Barber
from barbers.serializers import BarberSerializer
from rest_framework import generics
from rest_framework.authentication import TokenAuthentication
from barbers.permissions import AuthenticatedAndSuperUser

class BarberView(generics.ListCreateAPIView):
    authentication_classes = [TokenAuthentication]
    permissions_classes = [AuthenticatedAndSuperUser]

    queryset = Barber.objects.all()
    serializer_class = BarberSerializer

class BarberDetailView(generics.RetrieveUpdateDestroyAPIView):
    authentication_classes = [TokenAuthentication]
    permissions_classes = [AuthenticatedAndSuperUser]

    lookup_url_kwarg = "barber_id"

    queryset = Barber.objects.all()
    serializer_class = BarberSerializer