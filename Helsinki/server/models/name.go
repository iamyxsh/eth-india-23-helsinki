package models

import "github.com/kamva/mgm/v3"

type User struct {
	mgm.DefaultModel `bson:",inline"`
	Name             string `json:"name" bson:"name"`
	Address          string `json:"address" bson:"address"`
}

func NewUser(name, address string) User {
	return User{
		Name:    name,
		Address: address,
	}
}
