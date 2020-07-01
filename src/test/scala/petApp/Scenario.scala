package petApp

import configuration.TestConfiguration
import io.gatling.http.Predef._
import io.gatling.core.Predef._
import scala.util.Random


trait Scenario {


lazy val DataCentre = TestConfiguration.dataCenter
  var baseUrl:String = null

if(DataCentre == "Stage")
  {
    baseUrl = "https://petstore.swagger.io"
  }

else if(DataCentre == "Test")
  {
    baseUrl = "https://petstore.swagger.io"
  }

  val Ids = Iterator.continually(Map("id" ->Random.nextInt(5)))
  val csvFeeder = csv("Pet.csv").circular

  val header = Map(
    "Accept" -> "application/json",
    "Content-Type" -> "application/json"
  )

  val addNewPet = scenario("Add a new pet to the store")
    .feed(Ids)
    .feed(csvFeeder)
    .exec(
      http("Add a new pet to the store" + baseUrl)
        .post(baseUrl + "/v2/pet")
        .headers(header)
        .body(ElFileBody("jsonfile/AddPet.json"))
        .check(status.is(200))
        .check(responseTimeInMillis.lte(5000))
        .check(jsonPath("$.id").notNull)
    )

  val verifyNewPet = scenario("Verify pet to the store as per status")
    .feed(csvFeeder)
    .exec(
      http("Verify pet to the store as per status" + baseUrl)
        .get(baseUrl + "/v2/pet/findByStatus?${Status}")
        .headers(header)
        .check(status.is(200))
        .check(responseTimeInMillis.lte(5000))
        .check(jsonPath("$.id").notNull)
    )


val petStore = addNewPet.exec(verifyNewPet)

}
