from .models import Photoshoot, TARIFFS

# from django.forms import ModelForm, TextInput, Textarea, SelectMultiple
from django import forms

class PhotoshootForm(forms.ModelForm):

    tariff = forms.ChoiceField(label="Тариф")
    name = forms.CharField(label="Имя")
    email = forms.CharField(label="E-mail", required=False)
    phone = forms.CharField(label="Телефон")
    date = forms.CharField(label="Дата съемки", required=False)
    place = forms.CharField(label="Место съемки", required=False)
    comment = forms.Field(label="Комментарий", required=False)

    class Meta:
        model = Photoshoot
        fields = ["tariff", "name", "email", "phone", "date", "place", "comment"]
        widgets = {
            "tariff": forms.RadioSelect(attrs={
                'type': 'radio',
                'id': 'tariff',
                'name': 'tariff'
            }, choices=TARIFFS),
            "name": forms.TextInput(attrs={
                'type': 'text',
                'id': 'nickname',
                'name': 'nickname'
            }),
            "email": forms.EmailInput(attrs={
                'type': 'email',
                'id': 'user-email',
                'name': 'user-email'
            }),
            "phone": forms.TextInput(attrs={
                'type': 'tel',
                'id': 'phone',
                'name': 'phone'
            }),
            "date": forms.SelectDateWidget(attrs={
                'type': 'datetime',
            }),
            "place": forms.TextInput(attrs={
                'id': 'place',
                'name': 'place'
            }),
            "comment": forms.Textarea(attrs={
                'rows': '10',
                'cols': '50',
                'id': 'content',
                'name': 'content'
            })
        }
