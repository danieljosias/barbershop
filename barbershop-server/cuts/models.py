from django.db import models
import uuid

class Cut(models.Model):
    id = models.UUIDField(default=uuid.uuid4, primary_key=True, editable=False)
    cutting_day = models.DateField(auto_now=False, auto_now_add=False, blank=False, unique=True)
    cutting_hour = models.TimeField(auto_now=False, auto_now_add=False, blank=False, unique=True)

    user = models.OneToOneField("users.User", on_delete=models.CASCADE)

    