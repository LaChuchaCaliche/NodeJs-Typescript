class DatabaseConnection {
    beginTransaction(): void { // Inicia una transacción
      console.log("Transaction started");
    }
  
    commitTransaction(): void { // Confirma una transacción
      console.log("Transaction committed");
    }
  
    rollbackTransaction(): void { // Revierte una transacción
      console.log("Transaction rolled back");
    }
  }
  function Transactional(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
    const originalMethod = descriptor.value!;
    
    descriptor.value = function (...args: any[]) {
      const dbConnection = new DatabaseConnection();
      
      dbConnection.beginTransaction();
      
      try {
        const result = originalMethod.apply(this, args);
        dbConnection.commitTransaction();
        return result;
      } catch (error) {
        dbConnection.rollbackTransaction();
        throw error;
      }
    };
    
    return descriptor;
  }
  class UserService {
    @Transactional
    createUser(username: string, email: string): void {
      console.log(`Creating user ${username} with email ${email}`);
      // Simulamos una operación que podría fallar
      if (!email.includes('@')) {
        throw new Error("Invalid email");
      }
      console.log(`User ${username} created successfully`);
    }
  }
  
  // Probando la funcionalidad
  const userService = new UserService();
  try {
    userService.createUser("john_doe", "john.doe@example.com");
  } catch (error) {
    console.error("Transaction failed:", error.message);
  }
  
  try {
    userService.createUser("jane_doe", "jane.doeexample.com");
  } catch (error) {
    console.error("Transaction failed:", error.message);
  }