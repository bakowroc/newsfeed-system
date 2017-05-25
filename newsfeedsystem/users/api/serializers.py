from rest_framework import serializers
from users.models import User


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        #fields = '__all__'
        exclude = ('password', )
        depth = 1


class UserDetailSerializer(serializers.ModelSerializer):
        class Meta:
            model = User
            exclude = ('password', )
