from users.models import User
from rest_framework.validators import UniqueValidator
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    email = serializers.CharField(validators=[UniqueValidator(queryset=User.objects.all())])

    class Meta:
        model = User
        fields = ['id','email','username','first_name','last_name','is_active','is_superuser']
        read_only_fields = ['id', 'is_active']
        extra_krargs = {"password": {"write_only": True}}
