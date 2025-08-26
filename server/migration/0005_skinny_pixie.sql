CREATE TABLE "orderProduct" (
	"id" serial PRIMARY KEY NOT NULL,
	"quantity" integer NOT NULL,
	"productVariantID" serial NOT NULL,
	"productID" serial NOT NULL,
	"OrderID" serial NOT NULL
);
--> statement-breakpoint
CREATE TABLE "orders" (
	"id" serial PRIMARY KEY NOT NULL,
	"userID" text NOT NULL,
	"total" real NOT NULL,
	"status" text NOT NULL,
	"created" timestamp DEFAULT now(),
	"receiptURL" text
);
--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "customerId" text;--> statement-breakpoint
ALTER TABLE "orderProduct" ADD CONSTRAINT "orderProduct_productVariantID_productVariants_id_fk" FOREIGN KEY ("productVariantID") REFERENCES "public"."productVariants"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "orderProduct" ADD CONSTRAINT "orderProduct_productID_products_id_fk" FOREIGN KEY ("productID") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "orderProduct" ADD CONSTRAINT "orderProduct_OrderID_orders_id_fk" FOREIGN KEY ("OrderID") REFERENCES "public"."orders"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "orders" ADD CONSTRAINT "orders_userID_users_id_fk" FOREIGN KEY ("userID") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;