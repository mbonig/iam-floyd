import { Actions, PolicyStatement, PolicyStatementWithCondition, ResourceTypes } from "../shared";

/**
 * Statement provider for service [resource-groups](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsresourcegroups.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class ResourceGroups extends PolicyStatement {
  public servicePrefix = 'resource-groups';
  protected actionList: Actions = {
    "CreateGroup": {
      "url": "https://docs.aws.amazon.com/ARG/latest/APIReference/API_CreateGroup.html",
      "description": "Creates a group with a specified name, description, and resource query.",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "DeleteGroup": {
      "url": "https://docs.aws.amazon.com/ARG/latest/APIReference/API_DeleteGroup.html",
      "description": "Deletes a specified resource group",
      "accessLevel": "Write",
      "resourceTypes": {
        "group": {
          "required": true
        }
      }
    },
    "GetGroup": {
      "url": "https://docs.aws.amazon.com/ARG/latest/APIReference/API_GetGroup.html",
      "description": "Gets information of a specified resource group",
      "accessLevel": "Read",
      "resourceTypes": {
        "group": {
          "required": true
        }
      }
    },
    "GetGroupQuery": {
      "url": "https://docs.aws.amazon.com/ARG/latest/APIReference/API_GetGroupQuery.html",
      "description": "Gets the query associated with a specified resource group",
      "accessLevel": "Read",
      "resourceTypes": {
        "group": {
          "required": true
        }
      }
    },
    "GetTags": {
      "url": "https://docs.aws.amazon.com/ARG/latest/APIReference/API_GetTags.html",
      "description": "Gets the tags associated with a specified resource group",
      "accessLevel": "Read",
      "resourceTypes": {
        "group": {
          "required": true
        }
      }
    },
    "ListGroupResources": {
      "url": "https://docs.aws.amazon.com/ARG/latest/APIReference/API_ListGroupResources.html",
      "description": "Lists the resources that are member of a specified resource group",
      "accessLevel": "List",
      "resourceTypes": {
        "group": {
          "required": true
        }
      }
    },
    "ListGroups": {
      "url": "https://docs.aws.amazon.com/ARG/latest/APIReference/API_ListGroups.html",
      "description": "Lists all resource groups",
      "accessLevel": "List"
    },
    "SearchResources": {
      "url": "https://docs.aws.amazon.com/ARG/latest/APIReference/API_SearchResources.html",
      "description": "Returns a list of AWS resource identifiers matching the given query",
      "accessLevel": "List"
    },
    "Tag": {
      "url": "https://docs.aws.amazon.com/ARG/latest/APIReference/API_Tag.html",
      "description": "Tags a specified resource group",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "group": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "Untag": {
      "url": "https://docs.aws.amazon.com/ARG/latest/APIReference/API_Untag.html",
      "description": "Removes tags associated with a specified resource group",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "group": {
          "required": true
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "UpdateGroup": {
      "url": "https://docs.aws.amazon.com/ARG/latest/APIReference/API_UpdateGroup.html",
      "description": "Updates a specified resource group",
      "accessLevel": "Write",
      "resourceTypes": {
        "group": {
          "required": true
        }
      }
    },
    "UpdateGroupQuery": {
      "url": "https://docs.aws.amazon.com/ARG/latest/APIReference/API_UpdateGroupQuery.html",
      "description": "Updates the query associated with a specified resource group",
      "accessLevel": "Write",
      "resourceTypes": {
        "group": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "group": {
      "name": "group",
      "url": "https://docs.aws.amazon.com/ARG/latest/userguide/welcome.html",
      "arn": "arn:${Partition}:resource-groups:${Region}:${Account}:group/${GroupName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [resource-groups](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsresourcegroups.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Creates a group with a specified name, description, and resource query.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/ARG/latest/APIReference/API_CreateGroup.html
   */
  public toCreateGroup() {
    this.add('resource-groups:CreateGroup');
    return this;
  }

  /**
   * Deletes a specified resource group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ARG/latest/APIReference/API_DeleteGroup.html
   */
  public toDeleteGroup() {
    this.add('resource-groups:DeleteGroup');
    return this;
  }

  /**
   * Gets information of a specified resource group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ARG/latest/APIReference/API_GetGroup.html
   */
  public toGetGroup() {
    this.add('resource-groups:GetGroup');
    return this;
  }

  /**
   * Gets the query associated with a specified resource group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ARG/latest/APIReference/API_GetGroupQuery.html
   */
  public toGetGroupQuery() {
    this.add('resource-groups:GetGroupQuery');
    return this;
  }

  /**
   * Gets the tags associated with a specified resource group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ARG/latest/APIReference/API_GetTags.html
   */
  public toGetTags() {
    this.add('resource-groups:GetTags');
    return this;
  }

  /**
   * Lists the resources that are member of a specified resource group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ARG/latest/APIReference/API_ListGroupResources.html
   */
  public toListGroupResources() {
    this.add('resource-groups:ListGroupResources');
    return this;
  }

  /**
   * Lists all resource groups
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ARG/latest/APIReference/API_ListGroups.html
   */
  public toListGroups() {
    this.add('resource-groups:ListGroups');
    return this;
  }

  /**
   * Returns a list of AWS resource identifiers matching the given query
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ARG/latest/APIReference/API_SearchResources.html
   */
  public toSearchResources() {
    this.add('resource-groups:SearchResources');
    return this;
  }

  /**
   * Tags a specified resource group
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/ARG/latest/APIReference/API_Tag.html
   */
  public toTag() {
    this.add('resource-groups:Tag');
    return this;
  }

  /**
   * Removes tags associated with a specified resource group
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/ARG/latest/APIReference/API_Untag.html
   */
  public toUntag() {
    this.add('resource-groups:Untag');
    return this;
  }

  /**
   * Updates a specified resource group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ARG/latest/APIReference/API_UpdateGroup.html
   */
  public toUpdateGroup() {
    this.add('resource-groups:UpdateGroup');
    return this;
  }

  /**
   * Updates the query associated with a specified resource group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ARG/latest/APIReference/API_UpdateGroupQuery.html
   */
  public toUpdateGroupQuery() {
    this.add('resource-groups:UpdateGroupQuery');
    return this;
  }

  /**
   * Adds a resource of type group to the statement
   *
   * https://docs.aws.amazon.com/ARG/latest/userguide/welcome.html
   *
   * @param groupName - Identifier for the groupName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onGroup(groupName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:resource-groups:${Region}:${Account}:group/${GroupName}';
    arn = arn.replace('${GroupName}', groupName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters actions based on the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateGroup()
   * - .toTag()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - group
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the presence of tag keys in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateGroup()
   * - .toTag()
   * - .toUntag()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }
}
