from rest_framework import serializers
from django.contrib.auth.models import Group
#from groups.models import Group

class GroupCreateSerializer(serializers.ModelSerializer):

    class Meta:
        model = Group
        fields = '__all__'


class GroupSerializer(serializers.ModelSerializer):

    class Meta:
        model = Group
        fields = '__all__'


class GroupDetailSerializer(serializers.ModelSerializer):

    class Meta:
        model = Group
        fields = '__all__'
