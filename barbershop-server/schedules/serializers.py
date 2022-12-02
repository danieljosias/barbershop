from rest_framework import serializers
from schedules.models import Schedule
from users.models import User
from users.serializers import UserSerializer
from django.shortcuts import get_object_or_404
from rest_framework.validators import UniqueValidator

class ScheduleSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    user_id = serializers.UUIDField(write_only=True)
    available_day = serializers.CharField(validators=[UniqueValidator(queryset=Schedule.objects.all())])
    available_hour = serializers.CharField(validators=[UniqueValidator(queryset=Schedule.objects.all())])

    class Meta:
        model = Schedule
        fields = ['available_day','available_hour','user','user_id']
        read_only_fields = ['id']

    def create(self, validated_data):
        check_user_id = validated_data.pop('user_id')
        user_found = get_object_or_404(User, id=check_user_id)
        validated_data["user"] = user_found
        
        return Schedule.objects.create(**validated_data)   
    
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