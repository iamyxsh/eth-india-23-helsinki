package models

import "github.com/kamva/mgm/v3"

type Proposal struct {
	mgm.DefaultModel `bson:",inline"`
	WalletAddress    string   `json:"walletAddress" bson:"walletAddress"`
	Name             string   `json:"name" bson:"name"`
	ProposalAddress  string   `json:"proposalAddress" bson:"proposalAddress"`
	Threshold        int      `json:"threshold" bson:"threshold"`
	Data             string   `json:"data" bson:"data"`
	Likes            int      `json:"likes" bson:"likes"`
	Dislikes         int      `json:"dislikes" bson:"dislikes"`
	Signatories      []string `json:"signatories" bson:"signatories"`
	LoanAmount       string   `json:"loanAmount" bson:"loanAmount"`
	SecurityAmount   string   `json:"securityAmount" bson:"securityAmount"`
	Tenure           int      `json:"tenure" bson:"tenure"`
	IsFunded         bool     `json:"isFunded" bson:"IsFunded"`
	Published        bool     `json:"published" bson:"published"`
}
