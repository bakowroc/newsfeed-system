from rest_framework.permissions import BasePermission

class IsHimOrIsAdminUser(BasePermission):
    message = 'It\'s not your account'
    safe_method = ['PUT']

    def has_permission(self, request, view):
        if request.method in self.safe_method:
            return True
        return False

    def has_object_permission(self, request, view ,obj):
        if obj == request.user or request.user.is_staff:
            return True
        return False
