from rest_framework import serializers
from cuts.models import Cut
from schedules.models import Schedule
from users.models import User
from users.serializers import UserSerializer
from django.shortcuts import get_object_or_404
from rest_framework.validators import UniqueValidator

class CutSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    user_id = serializers.UUIDField(write_only=True)
    cutting_day = serializers.CharField(validators=[UniqueValidator(queryset=Cut.objects.all())])
    cutting_hour = serializers.CharField(validators=[UniqueValidator(queryset=Cut.objects.all())])

    class Meta:
        model = Cut
        fields = ['cutting_day','cutting_hour','user','user_id']
        read_only_fields = ['id']

    def create(self, validated_data):
        check_user_id = validated_data.pop('user_id')
        user_found = get_object_or_404(User, id=check_user_id)
        validated_data["user"] = user_found

    def update(self, instance, validated_data):
        try:
            check_client = validated_data.pop("client_id")
        except KeyError:
            check_client = False

        try:
            check_barber = validated_data.pop("barber_id")
        except KeyError:
            check_barber = False

        if check_client:
            client_found = get_object_or_404(Client, id=check_client)
            setattr(instance, "client", client_found)
            instance.save()    

        if check_barber:
            barber_found = get_object_or_404(Barber, id=check_barber)
            setattr(instance, "barber", barber_found)
            instance.save()

        for key, value in validated_data.items():
            setattr(instance.cuts, key, value)
            instance.cuts.save()

        return instance
