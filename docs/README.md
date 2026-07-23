# Fuentes de datos

Índice de los datos y estudios utilizados en la aplicación. Todos los archivos fuente se almacenan en `sources/`.

## Datos de ingresos fiscales / cotizaciones

| Fuente | Institución | URL | Archivo local | Fecha acceso |
|---|---|---|---|---|
| Encuesta Anual de Estructura Salarial | INE | https://www.ine.es/dyngs/INEbase/es/operacion.htm?c=Estadistica_C&cid=1254736177025&menu=resultados&idp=1254735976596 | `sources/ine-estructura-salarial.json` | 2025-07 |
| Decil de salarios del empleo principal | INE | https://www.ine.es/dyngs/INEbase/operacion.htm?c=Estadistica_C&cid=1254736176918&menu=resultados&idp=1254735976595 | `sources/ine-decil-salarios.json` | 2025-07 |
| Afiliación de extranjeros a la Seguridad Social | Seguridad Social / MITES | https://www.seg-social.es/wps/portal/wss/internet/EstadisticasPresupuestosEstudios/Estadisticas/EST8/EST10/EST305/EST307 | `sources/ss-afiliacion-extranjeros.json` | 2025-07 |
| Estadística de declarantes del IRPF | Agencia Tributaria | https://sede.agenciatributaria.gob.es/Sede/datosabiertos/catalogo/hacienda/Estadistica_de_los_declarantes_del_IRPF.shtml | `sources/aeat-irpf-tramos.json` | 2025-07 |

## Datos de gasto público

| Fuente | Institución | URL | Archivo local | Fecha acceso |
|---|---|---|---|---|
| Estadística de Gasto Sanitario Público (EGSP) | Ministerio de Sanidad | https://www.sanidad.gob.es/estadEstudios/sanidadDatos/tablas/tabla30_1.htm | `sources/sanidad-gasto-per-capita.json` | 2025-07 |
| Gasto público en educación | Ministerio de Educación | https://www.educacionfpydeportes.gob.es/servicios-al-ciudadano/estadisticas/economicas/gasto.html | `sources/educacion-gasto-por-alumno.json` | 2025-07 |
| Beneficiarios del IMV | INSS / Newtral | https://www.newtral.es/extranjeros-beneficiarios-imv-rentas-insercion/20251007/ | `sources/imv-beneficiarios.json` | 2025-07 |

## Datos demográficos de inmigración

| Fuente | Institución | URL | Archivo local | Fecha acceso |
|---|---|---|---|---|
| Estadística Continua de Población | INE | https://www.ine.es/dyngs/Prensa/ECP4T24.htm | `sources/ine-poblacion-nacionalidad.json` | 2025-07 |
| Encuesta de Población Activa (EPA) | INE | https://www.ine.es/dyngs/INEbase/operacion.htm?c=Estadistica_C&cid=1254736176918&menu=resultados&idp=1254735976595 | `sources/ine-epa-empleo-nacionalidad.json` | 2025-07 |

## Estudios académicos e internacionales

| Estudio | Autores / Institución | Año | URL | Archivo local |
|---|---|---|---|---|
| Contribución de la población extranjera al crecimiento del PIB per cápita | Banco de España | 2025 | https://www.bde.es/f/webbe/SES/Secciones/Publicaciones/InformesBoletinesRevistas/BoletinEconomico/25/T2/Fich/be2502-art10.pdf | `sources/bde-inmigracion-pib-2025.pdf` |
| Inmigración, envejecimiento y dividendo demográfico | Conde-Ruiz, González, Díaz-Salazar (FEDEA/ICE) | 2026 | https://www.revistasice.com/index.php/ICE/article/view/7977 | `sources/fedea-inmigracion-envejecimiento-2026.pdf` |
| Inmigración y crecimiento | Conde-Ruiz et al. (FUNCAS) | 2018 | https://www.funcas.es/wp-content/uploads/Migracion/Publicaciones/PDF/1807.pdf | `sources/funcas-inmigracion-crecimiento-2018.pdf` |
| International Migration Outlook 2025 | OCDE | 2025 | https://www.oecd.org/en/publications/international-migration-outlook-2025_ae26c893-en.html | `sources/oecd-migration-outlook-2025.pdf` |
| The Fiscal Impact of Immigration (Países Bajos) | Van de Beek et al. (IZA DP 17569) | 2024 | https://docs.iza.org/dp17569.pdf | `sources/iza-fiscal-impact-netherlands-2024.pdf` |
| Fiscal Impact of Immigration (Dinamarca) | Gerdes & Wadensjö | 2018 | https://link.springer.com/article/10.1007/s00148-017-0636-1 | N/A (de pago) |
| Projecting the Net Fiscal Impact of Immigration | JRC / Comisión Europea | 2020 | https://publications.jrc.ec.europa.eu/repository/bitstream/JRC121937/fiscal_impact_report_final_online.pdf | `sources/jrc-fiscal-impact-eu-2020.pdf` |

## Notas

- Los datos salariales por nacionalidad específica (marroquí, colombiano, etc.) son **estimaciones** basadas en cruzar la EAES (que distingue española/UE/extra-UE) con datos de la EPA sobre sectores de actividad y nivel de cualificación por nacionalidad. El INE no publica salarios medios por país de origen concreto.
- Los datos de tamaño de hogar e hijos por nacionalidad son aproximaciones basadas en el Censo 2021 y la Estadística Continua de Población.
- El gasto en "servicios públicos generales" (3.500 €/persona) es una estimación derivada del gasto público total menos sanidad, educación y pensiones, dividido entre la población total.
