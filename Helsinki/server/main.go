package main

import (
	"github.com/iamyxsh/helsinki/server/handlers"
	"github.com/iamyxsh/helsinki/server/utils"
	"log"

	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	utils.InitDb()

	app.Get("/ping", func(c *fiber.Ctx) error {
		return c.SendString("pong")
	})

	app.Post("/api/name", handlers.CreateName)
	app.Get("/api/name/:address", handlers.GetNameByAddress)

	app.Post("/api/proposal", handlers.CreateProposal)
	app.Get("/api/proposal/:address", handlers.GetProposal)
	app.Post("/api/proposal/like/:address", handlers.LikePost)
	app.Post("/api/proposal/dislike/:address", handlers.DislikePost)
	app.Post("/api/proposal/fund/:address", handlers.FundProposal)
	app.Post("/api/proposal/publish/:address", handlers.PublishProposal)

	log.Fatal(app.Listen(":8080"))
}
