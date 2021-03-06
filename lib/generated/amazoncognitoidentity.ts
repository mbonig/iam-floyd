import { Actions, PolicyStatement, PolicyStatementWithCondition, ResourceTypes } from "../shared";

/**
 * Statement provider for service [cognito-identity](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncognitoidentity.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class CognitoIdentity extends PolicyStatement {
  public servicePrefix = 'cognito-identity';
  protected actionList: Actions = {
    "CreateIdentityPool": {
      "url": "https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_CreateIdentityPool.html",
      "description": "Creates a new identity pool.",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "DeleteIdentities": {
      "url": "https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_DeleteIdentities.html",
      "description": "Deletes identities from an identity pool. You can specify a list of 1-60 identities that you want to delete.",
      "accessLevel": "Write"
    },
    "DeleteIdentityPool": {
      "url": "https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_DeleteIdentityPool.html",
      "description": "Deletes a user pool. Once a pool is deleted, users will not be able to authenticate with the pool.",
      "accessLevel": "Write",
      "resourceTypes": {
        "identitypool": {
          "required": true
        }
      }
    },
    "DescribeIdentity": {
      "url": "https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_DescribeIdentity.html",
      "description": "Returns metadata related to the given identity, including when the identity was created and any associated linked logins.",
      "accessLevel": "Read"
    },
    "DescribeIdentityPool": {
      "url": "https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_DescribeIdentityPool.html",
      "description": "Gets details about a particular identity pool, including the pool name, ID description, creation date, and current number of users.",
      "accessLevel": "Read",
      "resourceTypes": {
        "identitypool": {
          "required": true
        }
      }
    },
    "GetCredentialsForIdentity": {
      "url": "https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetCredentialsForIdentity.html",
      "description": "Returns credentials for the provided identity ID.",
      "accessLevel": "Read"
    },
    "GetId": {
      "url": "https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetId.html",
      "description": "Generates (or retrieves) a Cognito ID. Supplying multiple logins will create an implicit linked account.",
      "accessLevel": "Write"
    },
    "GetIdentityPoolRoles": {
      "url": "https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetIdentityPoolRoles.html",
      "description": "Gets the roles for an identity pool.",
      "accessLevel": "Read",
      "resourceTypes": {
        "identitypool": {
          "required": true
        }
      }
    },
    "GetOpenIdToken": {
      "url": "https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetOpenIdToken.html",
      "description": "Gets an OpenID token, using a known Cognito ID.",
      "accessLevel": "Read"
    },
    "GetOpenIdTokenForDeveloperIdentity": {
      "url": "https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetOpenIdTokenForDeveloperIdentity.html",
      "description": "Registers (or retrieves) a Cognito IdentityId and an OpenID Connect token for a user authenticated by your backend authentication process.",
      "accessLevel": "Read",
      "resourceTypes": {
        "identitypool": {
          "required": true
        }
      }
    },
    "ListIdentities": {
      "url": "https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_ListIdentities.html",
      "description": "Lists the identities in a pool.",
      "accessLevel": "List",
      "resourceTypes": {
        "identitypool": {
          "required": true
        }
      }
    },
    "ListIdentityPools": {
      "url": "https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_ListIdentityPools.html",
      "description": "Lists all of the Cognito identity pools registered for your account.",
      "accessLevel": "List"
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_ListTagsForResource.html",
      "description": "Lists the tags that are assigned to an Amazon Cognito identity pool.",
      "accessLevel": "List",
      "resourceTypes": {
        "identitypool": {
          "required": false
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "LookupDeveloperIdentity": {
      "url": "https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_LookupDeveloperIdentity.html",
      "description": "Retrieves the IdentityID associated with a DeveloperUserIdentifier or the list of DeveloperUserIdentifiers associated with an IdentityId for an existing identity.",
      "accessLevel": "Read",
      "resourceTypes": {
        "identitypool": {
          "required": true
        }
      }
    },
    "MergeDeveloperIdentities": {
      "url": "https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_MergeDeveloperIdentities.html",
      "description": "Merges two users having different IdentityIds, existing in the same identity pool, and identified by the same developer provider.",
      "accessLevel": "Write",
      "resourceTypes": {
        "identitypool": {
          "required": true
        }
      }
    },
    "SetIdentityPoolRoles": {
      "url": "https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_SetIdentityPoolRoles.html",
      "description": "Sets the roles for an identity pool. These roles are used when making calls to GetCredentialsForIdentity action.",
      "accessLevel": "Write"
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_TagResource.html",
      "description": "Assigns a set of tags to an Amazon Cognito identity pool.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "identitypool": {
          "required": false
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "UnlinkDeveloperIdentity": {
      "url": "https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_UnlinkDeveloperIdentity.html",
      "description": "Unlinks a DeveloperUserIdentifier from an existing identity.",
      "accessLevel": "Write",
      "resourceTypes": {
        "identitypool": {
          "required": true
        }
      }
    },
    "UnlinkIdentity": {
      "url": "https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_UnlinkIdentity.html",
      "description": "Unlinks a federated identity from an existing account.",
      "accessLevel": "Write"
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_UntagResource.html",
      "description": "Removes the specified tags from an Amazon Cognito identity pool.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "identitypool": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "UpdateIdentityPool": {
      "url": "https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_UpdateIdentityPool.html",
      "description": "Updates a user pool.",
      "accessLevel": "Write",
      "resourceTypes": {
        "identitypool": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "identitypool": {
      "name": "identitypool",
      "url": "https://docs.aws.amazon.com/cognito/latest/developerguide/identity-pools.html",
      "arn": "arn:${Partition}:cognito-identity:${Region}:${Account}:identitypool/${IdentityPoolId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [cognito-identity](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncognitoidentity.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Creates a new identity pool.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_CreateIdentityPool.html
   */
  public toCreateIdentityPool() {
    this.add('cognito-identity:CreateIdentityPool');
    return this;
  }

  /**
   * Deletes identities from an identity pool. You can specify a list of 1-60 identities that you want to delete.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_DeleteIdentities.html
   */
  public toDeleteIdentities() {
    this.add('cognito-identity:DeleteIdentities');
    return this;
  }

  /**
   * Deletes a user pool. Once a pool is deleted, users will not be able to authenticate with the pool.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_DeleteIdentityPool.html
   */
  public toDeleteIdentityPool() {
    this.add('cognito-identity:DeleteIdentityPool');
    return this;
  }

  /**
   * Returns metadata related to the given identity, including when the identity was created and any associated linked logins.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_DescribeIdentity.html
   */
  public toDescribeIdentity() {
    this.add('cognito-identity:DescribeIdentity');
    return this;
  }

  /**
   * Gets details about a particular identity pool, including the pool name, ID description, creation date, and current number of users.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_DescribeIdentityPool.html
   */
  public toDescribeIdentityPool() {
    this.add('cognito-identity:DescribeIdentityPool');
    return this;
  }

  /**
   * Returns credentials for the provided identity ID.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetCredentialsForIdentity.html
   */
  public toGetCredentialsForIdentity() {
    this.add('cognito-identity:GetCredentialsForIdentity');
    return this;
  }

  /**
   * Generates (or retrieves) a Cognito ID. Supplying multiple logins will create an implicit linked account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetId.html
   */
  public toGetId() {
    this.add('cognito-identity:GetId');
    return this;
  }

  /**
   * Gets the roles for an identity pool.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetIdentityPoolRoles.html
   */
  public toGetIdentityPoolRoles() {
    this.add('cognito-identity:GetIdentityPoolRoles');
    return this;
  }

  /**
   * Gets an OpenID token, using a known Cognito ID.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetOpenIdToken.html
   */
  public toGetOpenIdToken() {
    this.add('cognito-identity:GetOpenIdToken');
    return this;
  }

  /**
   * Registers (or retrieves) a Cognito IdentityId and an OpenID Connect token for a user authenticated by your backend authentication process.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetOpenIdTokenForDeveloperIdentity.html
   */
  public toGetOpenIdTokenForDeveloperIdentity() {
    this.add('cognito-identity:GetOpenIdTokenForDeveloperIdentity');
    return this;
  }

  /**
   * Lists the identities in a pool.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_ListIdentities.html
   */
  public toListIdentities() {
    this.add('cognito-identity:ListIdentities');
    return this;
  }

  /**
   * Lists all of the Cognito identity pools registered for your account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_ListIdentityPools.html
   */
  public toListIdentityPools() {
    this.add('cognito-identity:ListIdentityPools');
    return this;
  }

  /**
   * Lists the tags that are assigned to an Amazon Cognito identity pool.
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.add('cognito-identity:ListTagsForResource');
    return this;
  }

  /**
   * Retrieves the IdentityID associated with a DeveloperUserIdentifier or the list of DeveloperUserIdentifiers associated with an IdentityId for an existing identity.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_LookupDeveloperIdentity.html
   */
  public toLookupDeveloperIdentity() {
    this.add('cognito-identity:LookupDeveloperIdentity');
    return this;
  }

  /**
   * Merges two users having different IdentityIds, existing in the same identity pool, and identified by the same developer provider.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_MergeDeveloperIdentities.html
   */
  public toMergeDeveloperIdentities() {
    this.add('cognito-identity:MergeDeveloperIdentities');
    return this;
  }

  /**
   * Sets the roles for an identity pool. These roles are used when making calls to GetCredentialsForIdentity action.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_SetIdentityPoolRoles.html
   */
  public toSetIdentityPoolRoles() {
    this.add('cognito-identity:SetIdentityPoolRoles');
    return this;
  }

  /**
   * Assigns a set of tags to an Amazon Cognito identity pool.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    this.add('cognito-identity:TagResource');
    return this;
  }

  /**
   * Unlinks a DeveloperUserIdentifier from an existing identity.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_UnlinkDeveloperIdentity.html
   */
  public toUnlinkDeveloperIdentity() {
    this.add('cognito-identity:UnlinkDeveloperIdentity');
    return this;
  }

  /**
   * Unlinks a federated identity from an existing account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_UnlinkIdentity.html
   */
  public toUnlinkIdentity() {
    this.add('cognito-identity:UnlinkIdentity');
    return this;
  }

  /**
   * Removes the specified tags from an Amazon Cognito identity pool.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    this.add('cognito-identity:UntagResource');
    return this;
  }

  /**
   * Updates a user pool.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_UpdateIdentityPool.html
   */
  public toUpdateIdentityPool() {
    this.add('cognito-identity:UpdateIdentityPool');
    return this;
  }

  /**
   * Adds a resource of type identitypool to the statement
   *
   * https://docs.aws.amazon.com/cognito/latest/developerguide/identity-pools.html
   *
   * @param identityPoolId - Identifier for the identityPoolId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onIdentitypool(identityPoolId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:cognito-identity:${Region}:${Account}:identitypool/${IdentityPoolId}';
    arn = arn.replace('${IdentityPoolId}', identityPoolId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters actions based on the presence of tag key-value pairs in the request.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateIdentityPool()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on tag key-value pairs attached to the resource.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toCreateIdentityPool()
   * - .toListTagsForResource()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * Applies to resource types:
   * - identitypool
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by a key that is present in the request.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateIdentityPool()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }
}
