import "reflect-metadata";
import { Container } from "typedi";
import { AppointmentService } from "./appointments/AppointmentService";
import { EmailService } from "./notifications/EmailService";
import { NotificationService } from "./notifications/NotificationService";

// Replace SMS with Email service
Container.set(NotificationService, new EmailService());

const service = Container.get(AppointmentService);

service.bookAppointment("john@example.com", "Friday 10AM", 100)
  .then(res => console.log(res))
  .catch(err => console.error(err));
