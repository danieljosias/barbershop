from cuts.models import Cut
from cuts.serializers import CutSerializer
from rest_framework import generics
from rest_framework.authentication import TokenAuthentication

class CutView(generics.ListCreateAPIView):
    authentication_classes = [TokenAuthentication]

    queryset = Cut.objects.all()
    serializer_class = CutSerializer

class CutDetailView(generics.RetrieveUpdateDestroyAPIView):
    authentication_classes = [TokenAuthentication]

    lookup_url_kwarg = "cut_id"

    queryset = Cut.objects.all()
    serializer_class = CutSerializer