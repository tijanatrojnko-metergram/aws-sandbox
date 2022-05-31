import AWS, { DynamoDB } from "aws-sdk";

var tableParams = {
  AttributeDefinitions: [
    {
      AttributeName: "FirstName",
      AttributeType: "S",
    },
    {
      AttributeName: "Age",
      AttributeType: "N",
    },
  ],
  KeySchema: [
    {
      AttributeName: "FirstName",
      KeyType: "HASH",
    },
    {
      AttributeName: "FirstName",
      KeyType: "RANGE",
    },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1,
  },
  TableName: "tijana-internship-table",
  StreamSpecification: {
    StreamEnabled: false,
  },
};

export async function createDBTable() {
  var ddb = new AWS.DynamoDB();
  ddb.createTable(tableParams, function (err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data);
    }
  });
}
