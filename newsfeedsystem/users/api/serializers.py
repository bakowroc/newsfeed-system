from django.core.exceptions import ValidationError

from rest_framework import serializers
from django.contrib.auth.decorators import login_required
from django.contrib.auth import login, logout
from django.contrib.auth.models import User
from django.db.models import Q

from groups.api.serializers import GroupSerializer

import os

class UserCreateSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        exclude = [
                'date_joined',
                'last_login',
                'is_active',
                'is_staff',
                'user_permissions',
                'is_superuser',
                'groups'
                ]


class UserSerializer(serializers.ModelSerializer):


    class Meta:
        model = User
        #fields = '__all__'
        exclude = ['password']
        depth = 1


class UserDetailSerializer(serializers.ModelSerializer):


    class Meta:
        model = User
        exclude = ['password']
        depth = 1


class UserLoginSerializer(serializers.ModelSerializer):
    token = serializers.CharField(
                                allow_blank = True,
                                read_only = True
                                )

    email = serializers.EmailField(label='Email address')

    class Meta:
        model = User
        fields = [
            'email',
            'password',
            'token'

        ]
        extra_kwargs = {"password": {
                            "write_only": True
                            }
        }

    def validate(self, data):
        email = data.get('email')
        password = data.get('password')
        user = User.objects.filter(
            Q(email = email)
        ).distinct()
        user = user.exclude(email__isnull=True)
        if user.exists() and user.count() == 1:
            user_obj = user.first()
        else:
            raise ValidationError('Error')

        if user_obj:
            if not user_obj.check_password(password):
                raise ValidationError('Error')

        data ['token'] = os.urandom(22)
        return data
