# STUDENT LIVING OS

Demo navegable para operación de residencias estudiantiles. Está separado del proyecto BrAInd Plan y funciona sin API keys, servicios externos ni credenciales. Todo el contenido y las personas son ficticios.

## Requisitos

- Node.js 22 o posterior (las pruebas usan el soporte nativo de TypeScript de Node).
- npm.

## Instalación y ejecución

Desde esta carpeta, inicia la app Next.js:

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000). Para compilar producción: `npm run build`; para iniciar el build: `npm start`.

Para abrir la vista previa autónoma de la demo (sin instalar paquetes ni descargar dependencias), ejecuta `npm run preview`. Usa el puerto 3002 por defecto; puedes elegir uno libre con `PORT=4177 npm run preview`. La vista previa conserva el flujo comercial y persiste sus cambios localmente.

## Demo guiada: mantenimiento

1. En la bienvenida selecciona **Residente** y envía un reporte desde el formulario. El caso precargado corresponde a Valeria Soto: “No sale agua caliente de mi regadera”, habitación 401.
2. Cambia el perfil con **Cambiar perfil** y entra a **Administrador**. El ticket compartido aparece en la bandeja; asigna a Carlos Méndez.
3. Entra como **Operación**. La tarea asignada aparece en la bandeja. Inicia el trabajo, valida el QR simulado de la habitación 401, registra la reparación y resuelve el ticket.
4. Vuelve a **Residente**. El ticket aparece resuelto y la notificación interna queda en el estado compartido. Los indicadores se recalculan.

## Demo guiada: visitantes

1. Entra como **Residente → Invitaciones** y genera invitación. Código de demostración precargado: `SL-401-82`.
2. Entra como **Seguridad**, valida el código e indica la entrada.
3. Registra la salida desde la lista de visitas. La bitácora de caseta y las vistas de recepción y administración comparten el movimiento.

## Estructura

- `src/app`: layout, página y estilos responsive.
- `src/components`: reservado para componentes compartidos conforme crezca la demo.
- `src/data`: reservado para fixtures adicionales.
- `src/lib/demo-state.ts`: tipos, estado inicial y operaciones de dominio puras; punto de adaptación para un repositorio Supabase futuro.
- Persistencia local: `localStorage` en la clave `student-living-os-demo`. **Reiniciar demo** restaura el estado ficticio inicial.

La app Next.js incluye `public/manifest.webmanifest` como base PWA. Los QR, invitaciones, validaciones, reservas, asignaciones y evidencias son simulaciones visuales; no hay control de puertas, emergencias reales, pagos, reconocimiento facial ni integraciones de terceros.

## Pruebas

`npm test` ejecuta tres pruebas de dominio: ticket de principio a fin, entrada/salida de visitante y registro/entrega de paquete. `npx tsc --noEmit` verifica tipos. `npm run build` compila Next.js.
