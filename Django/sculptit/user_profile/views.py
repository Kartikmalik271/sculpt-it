from rest_framework.views import APIView
from django.contrib.auth.models import User
from rest_framework import permissions, status
from rest_framework.response import Response
from .models import UserProfile, UserArticle
from .serializers import UserProfileSerializer, UserArticleSerializer
from rest_framework.decorators import api_view



# Create your views here.
class GetUserProfileView(APIView):
    def get(self, request, format=None):
        try:
            user = self.request.user
            username=user.username

            user= User.objects.get(id=user.id)

            user_profile = UserProfile.objects.get(user=user)
            user_profile = UserProfileSerializer(user_profile)

            return Response({'profile':user_profile.data, 'username':str(username)})
        except:
            return Response(status=status.HTTP_400_BAD_REQUEST)

class UpdateUserProfileView(APIView):
    def put(self, request,format=None):
        try:
            user = self.request.user
            username=user.username

            data= self.request.data

            first_name = data['first_name']
            lastt_name = data['lastt_name']
            phone = data['phone']
            college = data['college']
    

            user= User.objects.get(id=user.id)

            UserProfile.objects.filter(user=user).update(first_name=first_name, lastt_name=lastt_name, phone=phone, college=college)

            user_profile = UserProfile.objects.get(user=user)
            user_profile = UserProfileSerializer(user_profile)

            return Response({'profile':user_profile.data, 'username':str(username)})
        except:
            return Response(status=status.HTTP_400_BAD_REQUEST)

class GetArticleList(APIView):
    def get(self, request, format=None):
        try:
            user = self.request.user
            username=user.username
            
            author= User.objects.get(id=user.id)
            user_article = UserArticle.objects.filter(user=user.id)
            user_article = UserArticleSerializer(user_article, many=True)

            return Response(user_article.data )
        except:
            return Response(status=status.HTTP_400_BAD_REQUEST)

class PostArticleList(APIView):
    def post(self, request,format=None):
        try:
            user = self.request.user
            username=user.username

            data= self.request.data

            title = data['title']
            contenttype = data['contenttype']
            description = data['description']
            look = data['look']
            user= User.objects.get(id=user.id)

            article_list=UserArticle(user=user, title=title, contenttype=contenttype, description=description, look=look)
            article_list.save()

            return Response({'success':'article added','username':str(username)})
        except:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class UserArticleDetails(APIView):
    def get_object(self, id):
        try:
            return UserArticle.objects.get(id=id)
        except UserArticle.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
    
    def get(self ,request, id):
        try:
            articles = self.get_object(id)
            serializer = UserArticleSerializer(articles)
            return Response(serializer.data)
        except:
            return Response(status=status.HTTP_400_BAD_REQUEST) 
    
    def put(self ,request, id):
        try:    
            data= self.request.data
            title = data['title']
            contenttype = data['contenttype']
            description = data['description']
            look = data['look']
            
            UserArticle.objects.filter(id=id).update(title=title, contenttype=contenttype, description=description, look=look)
            articles = self.get_object(id)
            serializer = UserArticleSerializer(articles)

            return Response(serializer.data)
        except:
            return Response(status=status.HTTP_400_BAD_REQUEST)


    def delete(self, request, id):
        articles = self.get_object(id)
        articles.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
       