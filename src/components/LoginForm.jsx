
import React from 'react';
import { useForm } from 'react-hook-form'; 
import styles from './LoginForm.module.css';

const LoginForm = () => {
  // Inicializamos el hook
  const {
    register, // Función para "registrar" un input y sus validaciones
    handleSubmit, // Función que envuelve nuestro manejador de envío
    formState: { errors }, // Objeto que contiene los errores de validación
  } = useForm();

  // Esta función se ejecutará SOLO si el formulario es válido
  const onSubmit = (data) => {
    console.log('Formulario enviado con éxito:', data);
    alert(`Bienvenido! (Datos en la consola)`);
  };

  return (
    // Usamos handleSubmit para envolver nuestra función onSubmit
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <h2>Iniciar Sesión</h2>

      <div className={styles.inputGroup}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          // Registramos el input y añadimos reglas de validación
          {...register('email', {
            required: 'El email es obligatorio',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Por favor, introduce un email válido',
            },
          })}
          className={errors.email ? styles.inputError : ''}
        />
        {/* Mostramos el mensaje de error si existe */}
        {errors.email && <p className={styles.errorMessage}>{errors.email.message}</p>}
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="password">Contraseña</label>
        <input
          id="password"
          type="password"
          {...register('password', {
            required: 'La contraseña es obligatoria',
            minLength: {
              value: 8,
              message: 'La contraseña debe tener al menos 8 caracteres',
            },
          })}
          className={errors.password ? styles.inputError : ''}
        />
        {errors.password && <p className={styles.errorMessage}>{errors.password.message}</p>}
      </div>

      <button type="submit" className={styles.submitButton}>
        Entrar
      </button>
    </form>
  );
};

export default LoginForm;