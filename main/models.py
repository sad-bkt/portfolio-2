from django.db import models

TARIFFS = (("mini", "mini"), ("middle", "middle"), ("maxi", "maxi"))

# Create your models here.

class Photoshoot(models.Model):
    #id = models()
    name = models.CharField('Имя клиента', max_length=50)
    email = models.EmailField('E-mail', max_length=50, null=True, blank=True)
    phone = models.CharField('Номер телефона', max_length=50)

    tariff = models.CharField('Название тарифа', choices=TARIFFS, max_length=50)
    date = models.DateTimeField('Время', null=True, blank=True)
    place = models.CharField('Место', max_length=50, blank=True)
    comment = models.TextField('Комментарий', blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Фотосъемка'
        verbose_name_plural = 'Фотосъемки'


class Clients(models.Model):
    name = models.CharField('Имя клиента', max_length=50)
    email = models.CharField('E-mail', max_length=50)
    phone = models.CharField('Номер телефона', max_length=50)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Клиент'
        verbose_name_plural = 'Клиенты'