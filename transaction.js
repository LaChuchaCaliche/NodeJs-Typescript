var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var DatabaseConnection = /** @class */ (function () {
    function DatabaseConnection() {
    }
    DatabaseConnection.prototype.beginTransaction = function () {
        console.log("Transaction started");
    };
    DatabaseConnection.prototype.commitTransaction = function () {
        console.log("Transaction committed");
    };
    DatabaseConnection.prototype.rollbackTransaction = function () {
        console.log("Transaction rolled back");
    };
    return DatabaseConnection;
}());
function Transactional(target, propertyName, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var dbConnection = new DatabaseConnection();
        dbConnection.beginTransaction();
        try {
            var result = originalMethod.apply(this, args);
            dbConnection.commitTransaction();
            return result;
        }
        catch (error) {
            dbConnection.rollbackTransaction();
            throw error;
        }
    };
    return descriptor;
}
var UserService = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _createUser_decorators;
    return _a = /** @class */ (function () {
            function UserService() {
                __runInitializers(this, _instanceExtraInitializers);
            }
            UserService.prototype.createUser = function (username, email) {
                console.log("Creating user ".concat(username, " with email ").concat(email));
                // Simulamos una operación que podría fallar
                if (!email.includes('@')) {
                    throw new Error("Invalid email");
                }
                console.log("User ".concat(username, " created successfully"));
            };
            return UserService;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _createUser_decorators = [Transactional];
            __esDecorate(_a, null, _createUser_decorators, { kind: "method", name: "createUser", static: false, private: false, access: { has: function (obj) { return "createUser" in obj; }, get: function (obj) { return obj.createUser; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
// Probando la funcionalidad
var userService = new UserService();
try {
    userService.createUser("john_doe", "john.doe@example.com");
}
catch (error) {
    console.error("Transaction failed:", error.message);
}
try {
    userService.createUser("jane_doe", "jane.doeexample.com");
}
catch (error) {
    console.error("Transaction failed:", error.message);
}
