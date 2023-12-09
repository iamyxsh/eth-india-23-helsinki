package handlers

import (
	"github.com/gofiber/fiber/v2"
	"github.com/iamyxsh/helsinki/server/models"
	"github.com/kamva/mgm/v3"
	"go.mongodb.org/mongo-driver/bson"
	"math/big"
)

type CreateNameReq struct {
	Name    string `json:"name"`
	Address string `json:"address"`
}

type CreateProposalReq struct {
	SafeAddress     string   `json:"safeAddress"`
	ProposalAddress string   `json:"proposalAddress"`
	Signatories     []string `json:"signatories"`
	Data            string   `json:"data"`
	LoanAmount      string   `json:"loanAmount"`
	Tenure          int      `json:"tenure"`
	Threshold       int      `json:"threshold"`
}

func CreateName(c *fiber.Ctx) error {
	var body CreateNameReq
	if err := c.BodyParser(&body); err != nil {
		return c.Status(400).SendString("Bad Request")
	}
	user := models.NewUser(body.Name, body.Address)

	err := mgm.Coll(&user).Create(&user)
	if err != nil {
		return c.Status(500).SendString(err.Error())
	}

	return c.SendStatus(201)
}

func CreateProposal(c *fiber.Ctx) error {
	var body CreateProposalReq
	if err := c.BodyParser(&body); err != nil {
		return c.Status(400).SendString("Bad Request")
	}
	loan := new(big.Int)
	loan, ok := loan.SetString(body.LoanAmount, 10)

	if !ok {
		return c.Status(400).SendString("loan int wrong")
	}

	securityAmount := new(big.Int).Mul(loan, big.NewInt(10))
	securityAmount.Div(securityAmount, big.NewInt(100))
	user := models.Proposal{
		LoanAmount:      body.LoanAmount,
		SafeAddress:     body.SafeAddress,
		ProposalAddress: body.ProposalAddress,
		Tenure:          body.Tenure,
		Signatories:     body.Signatories,
		Data:            body.Data,
		SecurityAmount:  securityAmount.String(),
		Likes:           0,
		Dislikes:        0,
		Threshold:       body.Threshold,
		IsFunded:        false,
		Published:       false,
	}

	err := mgm.Coll(&user).Create(&user)
	if err != nil {
		return c.Status(500).SendString(err.Error())
	}

	return c.SendStatus(201)
}

func GetNameByAddress(c *fiber.Ctx) error {
	address := c.Params("address")
	user := &models.User{}
	coll := mgm.Coll(user)

	err := coll.First(bson.M{"address": address}, user)
	if err != nil {
		return c.Status(500).SendString(err.Error())
	}

	return c.JSON(fiber.Map{
		"name":    user.Name,
		"address": user.Address,
	})
}

func GetProposal(c *fiber.Ctx) error {
	address := c.Params("address")
	filterType := c.Query("type")
	proposal := &models.Proposal{}
	coll := mgm.Coll(proposal)

	err := coll.First(bson.M{filterType: address}, proposal)
	if err != nil {
		return c.Status(500).SendString(err.Error())
	}

	return c.JSON(fiber.Map{
		"safeAddress":     proposal.SafeAddress,
		"proposalAddress": proposal.ProposalAddress,
		"threshold":       proposal.Threshold,
		"tenure":          proposal.Tenure,
		"loanAmount":      proposal.LoanAmount,
		"securityAmount":  proposal.SecurityAmount,
		"Published":       proposal.Published,
		"isFunded":        proposal.IsFunded,
		"signatories":     proposal.Signatories,
		"dislikes":        proposal.Dislikes,
		"likes":           proposal.Likes,
		"data":            proposal.Data,
	})
}

func LikePost(c *fiber.Ctx) error {
	address := c.Params("address")
	filterType := c.Query("type")

	proposal := &models.Proposal{}
	coll := mgm.Coll(proposal)

	err := coll.First(bson.M{filterType: address}, proposal)
	if err != nil {
		return c.Status(500).SendString(err.Error())
	}

	proposal.Likes += 1

	err = mgm.Coll(proposal).Update(proposal)
	if err != nil {
		return c.Status(500).SendString(err.Error())
	}

	return c.SendStatus(200)
}

func DislikePost(c *fiber.Ctx) error {
	address := c.Params("address")
	filterType := c.Query("type")

	proposal := &models.Proposal{}
	coll := mgm.Coll(proposal)

	err := coll.First(bson.M{filterType: address}, proposal)
	if err != nil {
		return c.Status(500).SendString(err.Error())
	}

	proposal.Dislikes += 1

	err = mgm.Coll(proposal).Update(proposal)
	if err != nil {
		return c.Status(500).SendString(err.Error())
	}

	return c.SendStatus(200)
}

func FundProposal(c *fiber.Ctx) error {
	address := c.Params("address")
	filterType := c.Query("type")

	proposal := &models.Proposal{}
	coll := mgm.Coll(proposal)

	err := coll.First(bson.M{filterType: address}, proposal)
	if err != nil {
		return c.Status(500).SendString(err.Error())
	}

	proposal.IsFunded = true

	err = mgm.Coll(proposal).Update(proposal)
	if err != nil {
		return c.Status(500).SendString(err.Error())
	}

	return c.SendStatus(200)
}

func PublishProposal(c *fiber.Ctx) error {
	address := c.Params("address")
	filterType := c.Query("type")

	proposal := &models.Proposal{}
	coll := mgm.Coll(proposal)

	err := coll.First(bson.M{filterType: address}, proposal)
	if err != nil {
		return c.Status(500).SendString(err.Error())
	}

	proposal.Published = true

	err = mgm.Coll(proposal).Update(proposal)
	if err != nil {
		return c.Status(500).SendString(err.Error())
	}

	return c.SendStatus(200)
}
