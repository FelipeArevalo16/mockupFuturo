from pymongo import MongoClient

client = MongoClient('mongodb://localhost:27017/')
db = client['mi_base_de_datos']
collection = db['usuarios']

collection.insert_one({"nombre": "Juan", "edad": 30})
