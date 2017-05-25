from rest_framework import serializers
from users.models import User

from groups.api.serializers import GroupSerializer

class UserCreateSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        exclude = ['date']


class UserSerializer(serializers.ModelSerializer):

    group = GroupSerializer()

    class Meta:
        model = User
        #fields = '__all__'
        exclude = ('password', )
        depth = 1


class UserDetailSerializer(serializers.ModelSerializer):

    group = GroupSerializer()

    class Meta:
        model = User
        exclude = ('password', )
        depth = 1
