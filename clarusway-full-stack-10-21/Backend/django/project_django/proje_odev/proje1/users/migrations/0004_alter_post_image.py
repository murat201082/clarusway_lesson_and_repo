# Generated by Django 3.2.8 on 2022-06-07 19:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_alter_post_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='image',
            field=models.ImageField(default='muhabbet_kuşu.jpg', upload_to='profile_pics'),
        ),
    ]
