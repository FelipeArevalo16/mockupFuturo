import mysql.connector

conn = mysql.connector.connect(
    host="localhost",
    user="root",
    password="tu_contraseña",
    database="mi_base_de_datos"
)

cursor = conn.cursor()

cursor.execute("SELECT * FROM usuarios")
resultados = cursor.fetchall()

for row in resultados:
    print(row)


conn.close()
