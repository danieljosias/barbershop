from clients.models import Client
from rest_framework import serializers
from users.models import User
from clients.models import Client
from users.serializers import UserSerializer

class ClientSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Client
        fields = '__all__'
        read_only_fields = ['id']
        extra_krargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user_data = validated_data.pop("user")
        user = User.objects.create_user(**user_data)
        return Client.objects.create(user=user)
        
    def update(self, instance, validated_data):
        try:
            request_user = validated_data.pop("user")
        except KeyError:
            request_user = False

        if request_user:
            for key, value in request_user.items():
                setattr(instance.user, key, value)
            instance.user.save()

        super().update(instance, validated_data)
        return instance


  