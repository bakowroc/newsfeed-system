from rest_framework.generics import ListAPIView, RetrieveAPIView

from news.models import News
from news.api.serializers import NewsSerializer, NewsDetailSerializer

class NewsList(ListAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer


class NewsDetail(RetrieveAPIView):
    queryset = News.objects.all()
    serializer_class = NewsDetailSerializer
