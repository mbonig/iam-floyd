import { Actions, PolicyStatement, PolicyStatementWithCondition, ResourceTypes } from "../shared";

/**
 * Statement provider for service [codeguru-profiler](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncodeguruprofiler.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class CodeguruProfiler extends PolicyStatement {
  public servicePrefix = 'codeguru-profiler';
  protected actionList: Actions = {
    "AddNotificationChannels": {
      "url": "https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_AddNotificationChannels.html",
      "description": "Grants permission to add up to 2 topic ARNs of existing AWS SNS topics to publish notifications",
      "accessLevel": "Write",
      "resourceTypes": {
        "ProfilingGroup": {
          "required": true
        }
      }
    },
    "BatchGetFrameMetricData": {
      "url": "https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_BatchGetFrameMetricData.html",
      "description": "Grants permission to get the frame metric data for a Profiling Group",
      "accessLevel": "List",
      "resourceTypes": {
        "ProfilingGroup": {
          "required": true
        }
      }
    },
    "ConfigureAgent": {
      "url": "https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html",
      "description": "Grants permission for an agent to register with the orchestration service and retrieve profiling configuration information",
      "accessLevel": "Write",
      "resourceTypes": {
        "ProfilingGroup": {
          "required": true
        }
      }
    },
    "CreateProfilingGroup": {
      "url": "https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_CreateProfilingGroup.html",
      "description": "Grants permission to create a profiling group",
      "accessLevel": "Write",
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    },
    "DeleteProfilingGroup": {
      "url": "https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_DeleteProfilingGroup.html",
      "description": "Grants permission to delete a profiling group",
      "accessLevel": "Write",
      "resourceTypes": {
        "ProfilingGroup": {
          "required": true
        }
      }
    },
    "DescribeProfilingGroup": {
      "url": "https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_DescribeProfilingGroup.html",
      "description": "Grants permission to describe a profiling group",
      "accessLevel": "Read",
      "resourceTypes": {
        "ProfilingGroup": {
          "required": true
        }
      }
    },
    "GetFindingsReportAccountSummary": {
      "url": "https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetFindingsReportAccountSummary.html",
      "description": "Grants permission to get a summary of recent recommendations for each profiling group in the account",
      "accessLevel": "Read"
    },
    "GetNotificationConfiguration": {
      "url": "https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetNotificationConfiguration.html",
      "description": "Grants permission to get the notification configuration",
      "accessLevel": "Read",
      "resourceTypes": {
        "ProfilingGroup": {
          "required": true
        }
      }
    },
    "GetPolicy": {
      "url": "https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetPolicy.html",
      "description": "Grants permission to get the resource policy associated with the specified Profiling Group.",
      "accessLevel": "Read",
      "resourceTypes": {
        "ProfilingGroup": {
          "required": true
        }
      }
    },
    "GetProfile": {
      "url": "https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetProfile.html",
      "description": "Grants permission to get aggregated profiles for a specific profiling group",
      "accessLevel": "Read",
      "resourceTypes": {
        "ProfilingGroup": {
          "required": true
        }
      }
    },
    "GetRecommendations": {
      "url": "https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetRecommendations.html",
      "description": "Grants permission to get recommendations",
      "accessLevel": "Read",
      "resourceTypes": {
        "ProfilingGroup": {
          "required": true
        }
      }
    },
    "ListFindingsReports": {
      "url": "https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ListFindingsReports.html",
      "description": "Grants permission to list the available recommendations reports for a specific profiling group",
      "accessLevel": "List",
      "resourceTypes": {
        "ProfilingGroup": {
          "required": true
        }
      }
    },
    "ListProfileTimes": {
      "url": "https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ListProfileTimes.html",
      "description": "Grants permission to list the start times of the available aggregated profiles for a specific profiling group",
      "accessLevel": "List",
      "resourceTypes": {
        "ProfilingGroup": {
          "required": true
        }
      }
    },
    "ListProfilingGroups": {
      "url": "https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ListProfilingGroups.html",
      "description": "Grants permission to list profiling groups in the account",
      "accessLevel": "List"
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ListTagsForResource.html",
      "description": "Grants permission to list tags for a Profiling Group",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "ProfilingGroup": {
          "required": true
        }
      }
    },
    "PostAgentProfile": {
      "url": "https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_PostAgentProfile.html",
      "description": "Grants permission to submit a profile collected by an agent belonging to a specific profiling group for aggregation",
      "accessLevel": "Write",
      "resourceTypes": {
        "ProfilingGroup": {
          "required": true
        }
      }
    },
    "PutPermission": {
      "url": "https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_PutPermission.html",
      "description": "Grants permission to update the list of principals allowed for an action group in the resource policy associated with the specified Profiling Group.",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "ProfilingGroup": {
          "required": true
        }
      }
    },
    "RemoveNotificationChannel": {
      "url": "https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_RemoveNotificationChannel.html",
      "description": "Grants permission to delete an already configured SNStopic arn from the notification configuration",
      "accessLevel": "Write",
      "resourceTypes": {
        "ProfilingGroup": {
          "required": true
        }
      }
    },
    "RemovePermission": {
      "url": "https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_RemovePermission.html",
      "description": "Grants permission to remove the permission of specified Action Group from the resource policy associated with the specified Profiling Group.",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "ProfilingGroup": {
          "required": true
        }
      }
    },
    "SubmitFeedback": {
      "url": "https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_SubmitFeedback.html",
      "description": "Grants permission to submit user feedback for useful or non useful anomaly",
      "accessLevel": "Write",
      "resourceTypes": {
        "ProfilingGroup": {
          "required": true
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_TagResource.html",
      "description": "Grants permission to add or overwrite tags to a Profiling Group",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "ProfilingGroup": {
          "required": true
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_UntagResource.html",
      "description": "Grants permission to remove tags from a Profiling Group",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "ProfilingGroup": {
          "required": true
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    },
    "UpdateProfilingGroup": {
      "url": "https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_UpdateProfilingGroup.html",
      "description": "Grants permission to update a specific profiling group",
      "accessLevel": "Write",
      "resourceTypes": {
        "ProfilingGroup": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "ProfilingGroup": {
      "name": "ProfilingGroup",
      "url": "https://docs.aws.amazon.com/codeguru/latest/profiler-ug/working-with-profiling-groups.html",
      "arn": "arn:${Partition}:codeguru-profiler:${Region}:${Account}:profilingGroup/${ProfilingGroupName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [codeguru-profiler](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncodeguruprofiler.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to add up to 2 topic ARNs of existing AWS SNS topics to publish notifications
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_AddNotificationChannels.html
   */
  public toAddNotificationChannels() {
    this.add('codeguru-profiler:AddNotificationChannels');
    return this;
  }

  /**
   * Grants permission to get the frame metric data for a Profiling Group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_BatchGetFrameMetricData.html
   */
  public toBatchGetFrameMetricData() {
    this.add('codeguru-profiler:BatchGetFrameMetricData');
    return this;
  }

  /**
   * Grants permission for an agent to register with the orchestration service and retrieve profiling configuration information
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html
   */
  public toConfigureAgent() {
    this.add('codeguru-profiler:ConfigureAgent');
    return this;
  }

  /**
   * Grants permission to create a profiling group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_CreateProfilingGroup.html
   */
  public toCreateProfilingGroup() {
    this.add('codeguru-profiler:CreateProfilingGroup');
    return this;
  }

  /**
   * Grants permission to delete a profiling group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_DeleteProfilingGroup.html
   */
  public toDeleteProfilingGroup() {
    this.add('codeguru-profiler:DeleteProfilingGroup');
    return this;
  }

  /**
   * Grants permission to describe a profiling group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_DescribeProfilingGroup.html
   */
  public toDescribeProfilingGroup() {
    this.add('codeguru-profiler:DescribeProfilingGroup');
    return this;
  }

  /**
   * Grants permission to get a summary of recent recommendations for each profiling group in the account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetFindingsReportAccountSummary.html
   */
  public toGetFindingsReportAccountSummary() {
    this.add('codeguru-profiler:GetFindingsReportAccountSummary');
    return this;
  }

  /**
   * Grants permission to get the notification configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetNotificationConfiguration.html
   */
  public toGetNotificationConfiguration() {
    this.add('codeguru-profiler:GetNotificationConfiguration');
    return this;
  }

  /**
   * Grants permission to get the resource policy associated with the specified Profiling Group.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetPolicy.html
   */
  public toGetPolicy() {
    this.add('codeguru-profiler:GetPolicy');
    return this;
  }

  /**
   * Grants permission to get aggregated profiles for a specific profiling group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetProfile.html
   */
  public toGetProfile() {
    this.add('codeguru-profiler:GetProfile');
    return this;
  }

  /**
   * Grants permission to get recommendations
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetRecommendations.html
   */
  public toGetRecommendations() {
    this.add('codeguru-profiler:GetRecommendations');
    return this;
  }

  /**
   * Grants permission to list the available recommendations reports for a specific profiling group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ListFindingsReports.html
   */
  public toListFindingsReports() {
    this.add('codeguru-profiler:ListFindingsReports');
    return this;
  }

  /**
   * Grants permission to list the start times of the available aggregated profiles for a specific profiling group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ListProfileTimes.html
   */
  public toListProfileTimes() {
    this.add('codeguru-profiler:ListProfileTimes');
    return this;
  }

  /**
   * Grants permission to list profiling groups in the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ListProfilingGroups.html
   */
  public toListProfilingGroups() {
    this.add('codeguru-profiler:ListProfilingGroups');
    return this;
  }

  /**
   * Grants permission to list tags for a Profiling Group
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.add('codeguru-profiler:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to submit a profile collected by an agent belonging to a specific profiling group for aggregation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_PostAgentProfile.html
   */
  public toPostAgentProfile() {
    this.add('codeguru-profiler:PostAgentProfile');
    return this;
  }

  /**
   * Grants permission to update the list of principals allowed for an action group in the resource policy associated with the specified Profiling Group.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_PutPermission.html
   */
  public toPutPermission() {
    this.add('codeguru-profiler:PutPermission');
    return this;
  }

  /**
   * Grants permission to delete an already configured SNStopic arn from the notification configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_RemoveNotificationChannel.html
   */
  public toRemoveNotificationChannel() {
    this.add('codeguru-profiler:RemoveNotificationChannel');
    return this;
  }

  /**
   * Grants permission to remove the permission of specified Action Group from the resource policy associated with the specified Profiling Group.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_RemovePermission.html
   */
  public toRemovePermission() {
    this.add('codeguru-profiler:RemovePermission');
    return this;
  }

  /**
   * Grants permission to submit user feedback for useful or non useful anomaly
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_SubmitFeedback.html
   */
  public toSubmitFeedback() {
    this.add('codeguru-profiler:SubmitFeedback');
    return this;
  }

  /**
   * Grants permission to add or overwrite tags to a Profiling Group
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_TagResource.html
   */
  public toTagResource() {
    this.add('codeguru-profiler:TagResource');
    return this;
  }

  /**
   * Grants permission to remove tags from a Profiling Group
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_UntagResource.html
   */
  public toUntagResource() {
    this.add('codeguru-profiler:UntagResource');
    return this;
  }

  /**
   * Grants permission to update a specific profiling group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_UpdateProfilingGroup.html
   */
  public toUpdateProfilingGroup() {
    this.add('codeguru-profiler:UpdateProfilingGroup');
    return this;
  }

  /**
   * Adds a resource of type ProfilingGroup to the statement
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-ug/working-with-profiling-groups.html
   *
   * @param profilingGroupName - Identifier for the profilingGroupName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onProfilingGroup(profilingGroupName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:codeguru-profiler:${Region}:${Account}:profilingGroup/${ProfilingGroupName}';
    arn = arn.replace('${ProfilingGroupName}', profilingGroupName);
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
   * - .toCreateProfilingGroup()
   * - .toTagResource()
   * - .toUntagResource()
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
   * - ProfilingGroup
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
   * - .toCreateProfilingGroup()
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
