from rest_framework import permissions
from rest_framework.views import Request, View
from barbers.models import Barber

class IsAuthenticatedAndBarber(permissions.BasePermission):
    def has_object_permission(self, request: Request, view: View, obj: Barber):
        return request.user.is_authenticate and request.user.is_active == True
    