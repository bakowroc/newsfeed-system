from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from news.models import News
from news.api.serializers import NewsSerializer

class NewsList(APIView):

    def get(self, request):
        news = News.objects.all()
        serializer = NewsSerializer(news, many = True)
        return Response(serializer.data)

    def post(self):
        pass
