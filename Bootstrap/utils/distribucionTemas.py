import random
from datetime import datetime

temas = ["Barra de navegación (navbar)",   
"Botones (buttons)", 
"Tarjetas (cards)", 
"Breadcrumb (migas de pan)", 
["Ventanas emergentes (modal)", "Menús desplegables (dropdown)"],
"Formularios (forms)", 
"Carrusel (carousel)", 
"Tablas (tables)", 
["Barras de progreso (progress bars)", "Descripciones emergentes (tooltips)"],
"Buenas prácticas"]

estudiantes = [
'ADRIAN ALBERTO BROWN GOMEZ: '	,   
'RICARDO JOSE CASTILLO MATARRITA: '	,   
'D JEHOVANN NASHAWN DIXON LAWRENCE',   
'NELSON GERARDO FERNANDEZ GONZALEZ: '	,   
'JOSE PABLO LEON RODRIGUEZ: no muestra los dos ejemplos funcionales de implementación indica que los colocó solo en el documento de investigación, no responde a la pregunta: ¿Diferencia entre usar .btn en <a> y <button>?, durante la exposición indica que se puede usar la clase en otros elementos como enlaces, sin embargo indica que el botón tenga un enlace a un video',
'FABIOLA MATAMOROS GOMEZ: ',
'ADONIS NOA FROMETA: ',
'MAYCOL STEVEN PORRAS ARAYA: ',
'ROBERTO ANDRES THOMAS TORRES: usa collapse para el menú de hamburguesa', 
"Hazel: "	
]

# Mezclar estudiantes
random.shuffle(estudiantes)

with open("distribucion_temas.txt", "w", encoding="utf-8") as archivo:
    archivo.write("DISTRIBUCIÓN DE TEMAS \n\n")
    
    for i in range(len(temas)):
        estudiante = estudiantes[i]
        tema = temas[i]
        
        archivo.write(f"{estudiante}\n")
        archivo.write("Tema(s) asignado(s):\n")
        
        if isinstance(tema, list):
            for subtema in tema:
                archivo.write(f"  - {subtema}\n")
        else:
            archivo.write(f"  - {tema}\n")
        archivo.write("\n")

print("Archivo guardado: distribucion_temas.txt")
    

