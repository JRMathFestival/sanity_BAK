// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator"

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type"

// We import object and document schemas
import blockContent, { youtube } from "./blockContent"
import category from "./category"
import post from "./post"
import activity, {
  icon,
  link,
  links,
  numberOfPlayers,
  richFile,
} from "./activity"
import getInvolved, { getInvolvedLink } from "./getInvolved"
import seo from "./seo"
import richImage from "./richImage"
import customPage from "./customPage"
import homepage, {
  marketingBlock,
  richVideo,
  socialMediaLink,
} from "./homepage"
import team from "./team"
import about, { impactNumber, milestone, report } from "./about"
import event, { dateRange } from "./event"
import eventCategory from "./eventCategory"
import localization, {
  localeBlockContent,
  localeString,
  localeText,
} from "./localization"
import settings, { redirect } from "./settings"

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  type: "schema",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    //Documents
    activity,
    event,
    post,
    about,
    customPage,
    team,
    richImage,
    category,
    eventCategory,
    getInvolved,
    localization,
    seo,
    richVideo,
    blockContent,
    homepage,
    settings,
    //Localizations
    localeString,
    localeBlockContent,
    localeText,
    //Objects
    marketingBlock,
    redirect,
    milestone,
    dateRange,
    report,
    richFile,
    links,
    impactNumber,
    getInvolvedLink,
    link,
    numberOfPlayers,
    socialMediaLink,
    youtube,
  ]),
})
