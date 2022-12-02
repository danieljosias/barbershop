from rest_framework import generics
from clients.models import Client
from clients.serializers import ClientSerializer
from clients.permissions import AuthenticatedAndSuperUser
from rest_framework.authentication import TokenAuthentication

class ClientView(generics.ListCreateAPIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [AuthenticatedAndSuperUser]

    queryset = Client.objects.all()
    serializer_class = ClientSerializer

class ClientDetailView(generics.RetrieveUpdateDestroyAPIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [AuthenticatedAndSuperUser]

    lookup_url_kwarg = "client_id"
    
    queryset = Client.objects.all()
    serializer_class = ClientSerializer

        