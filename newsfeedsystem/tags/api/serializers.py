from rest_framework import serializers
from tags.models import Tag


class TagCreateSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tag


class TagSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tag
        fields = '__all__'
        depth = 1


class TagDetailSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tag
        depth = 1
